"use client";

import { useActionState, useEffect, useId, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// CircleAlert / CircleCheck / LoaderCircle are the canonical lucide names of
// AlertCircle / CheckCircle2 / Loader2.
import { Check, CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { waitlist } from "@/content/landing";
import { joinWaitlist } from "@/app/actions/waitlist";
import {
  initialWaitlistState,
  waitlistFields,
  waitlistSchema,
  type WaitlistData,
  type WaitlistField,
  type WaitlistInput,
  type WaitlistState,
} from "@/lib/waitlist-schema";

const { fields, errors: copyErrors, submitting: SUBMITTING_LABEL } = waitlist;

const inputBase =
  "block min-h-14 w-full rounded-card border-[1.5px] bg-card px-4 py-3 text-lg text-ink outline-none focus-visible:ring-3 focus-visible:ring-brand focus-visible:ring-offset-2";

function describedBy(...ids: (string | false | undefined)[]): string | undefined {
  const value = ids.filter(Boolean).join(" ");
  return value || undefined;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-base font-bold text-danger">
      <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
      <span>{message}</span>
    </p>
  );
}

export function WaitlistForm() {
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    contact: `${uid}-contact`,
    contactHint: `${uid}-contact-hint`,
    roleLegend: `${uid}-role-legend`,
    consent: `${uid}-consent`,
    company: `${uid}-company`,
    error: (field: WaitlistField) => `${uid}-${field}-error`,
  };

  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Native (no-JS) submission path: the form posts straight to the Server Action.
  const [actionState, formAction] = useActionState(joinWaitlist, initialWaitlistState);
  // JS path: validated by RHF, then the action is called inside a transition.
  const [clientState, setClientState] = useState<WaitlistState | null>(null);
  const [isPending, startTransition] = useTransition();

  const result = clientState ?? actionState;
  const isSuccess = result.status === "success";
  const isNetworkError = result.status === "error";

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<WaitlistInput, unknown, WaitlistData>({
    resolver: zodResolver(waitlistSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: { name: "", contact: "", consent: false },
  });

  useEffect(() => {
    if (isSuccess) successRef.current?.focus();
  }, [isSuccess]);

  function errorFor(field: WaitlistField): string | undefined {
    const clientMessage = errors[field]?.message;
    if (clientMessage) return clientMessage;
    // Errors from a native (no-JS) submission, before any JS submission happened.
    return clientState ? undefined : actionState.errors?.[field]?.[0];
  }

  const onValid = () => {
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    startTransition(async () => {
      let next: WaitlistState;
      try {
        next = await joinWaitlist(result, formData);
      } catch {
        next = { status: "error" };
      }
      for (const field of waitlistFields) {
        const message = next.errors?.[field]?.[0];
        if (message) setError(field, { type: "server", message });
      }
      setClientState(next);
    });
  };

  const nameError = errorFor("name");
  const contactError = errorFor("contact");
  const roleError = errorFor("role");
  const consentError = errorFor("consent");

  return (
    <div>
      <div aria-live="polite" role="status">
        {isSuccess ? (
          <div
            ref={successRef}
            tabIndex={-1}
            className="flex items-start gap-4 rounded-card border-2 border-brand bg-card p-6 text-lg text-ink outline-none focus-visible:ring-3 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <CircleCheck aria-hidden="true" className="size-8 shrink-0 text-brand" />
            <p className="font-bold">{waitlist.success}</p>
          </div>
        ) : null}
      </div>

      {isSuccess ? null : (
        <form
          ref={formRef}
          action={formAction}
          onSubmit={(event) => {
            // With JS: RHF validates first; without JS the native submit hits the action.
            event.preventDefault();
            void handleSubmit(onValid)(event);
          }}
          noValidate
          className="flex flex-col gap-6"
        >
          {/* Nombre */}
          <div>
            <label htmlFor={ids.name} className="mb-2 block text-lg font-bold text-ink">
              {fields.name.label}
            </label>
            <input
              id={ids.name}
              type="text"
              autoComplete="name"
              aria-invalid={nameError ? true : undefined}
              aria-describedby={describedBy(nameError && ids.error("name"))}
              className={`${inputBase} ${nameError ? "border-danger" : "border-line-input"}`}
              {...register("name")}
            />
            <FieldError id={ids.error("name")} message={nameError} />
          </div>

          {/* WhatsApp o correo */}
          <div>
            <label htmlFor={ids.contact} className="block text-lg font-bold text-ink">
              {fields.contact.label}
            </label>
            <p id={ids.contactHint} className="mb-2 text-base text-muted">
              {fields.contact.hint}
            </p>
            <input
              id={ids.contact}
              type="text"
              inputMode="email"
              autoComplete="on"
              aria-invalid={contactError ? true : undefined}
              aria-describedby={describedBy(
                ids.contactHint,
                contactError && ids.error("contact"),
              )}
              className={`${inputBase} ${contactError ? "border-danger" : "border-line-input"}`}
              {...register("contact")}
            />
            <FieldError id={ids.error("contact")} message={contactError} />
          </div>

          {/* Soy… */}
          <fieldset aria-describedby={describedBy(roleError && ids.error("role"))}>
            <legend id={ids.roleLegend} className="mb-2 text-lg font-bold text-ink">
              {fields.role.label}
            </legend>
            <div className="flex flex-col gap-3 sm:flex-row">
              {fields.role.options.map((option) => (
                <label
                  key={option.value}
                  className={`group relative flex min-h-14 flex-1 cursor-pointer items-center gap-3 rounded-card border-[1.5px] bg-card px-4 py-3 text-lg text-ink has-checked:border-2 has-checked:border-brand has-checked:bg-accent has-checked:text-accent-foreground has-focus-visible:ring-3 has-focus-visible:ring-brand has-focus-visible:ring-offset-2 ${
                    roleError ? "border-danger" : "border-line-input"
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    aria-describedby={describedBy(roleError && ids.error("role"))}
                    className="sr-only"
                    {...register("role")}
                  />
                  <span
                    aria-hidden="true"
                    className="flex size-6 shrink-0 items-center justify-center rounded-full border-[1.5px] border-line-input bg-card group-has-checked:border-brand group-has-checked:bg-brand"
                  >
                    <Check className="invisible size-4 text-brand-foreground group-has-checked:visible" strokeWidth={3} />
                  </span>
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            <FieldError id={ids.error("role")} message={roleError} />
          </fieldset>

          {/* Consentimiento */}
          <div>
            <label
              htmlFor={ids.consent}
              className="flex min-h-12 cursor-pointer items-start gap-3 py-1 text-base text-ink"
            >
              <input
                id={ids.consent}
                type="checkbox"
                aria-invalid={consentError ? true : undefined}
                aria-describedby={describedBy(consentError && ids.error("consent"))}
                className="mt-0.5 size-6 shrink-0 cursor-pointer accent-brand"
                {...register("consent")}
              />
              <span>
                {fields.consent.before}
                <Link
                  href={fields.consent.linkHref}
                  className="font-bold text-brand underline underline-offset-2"
                >
                  {fields.consent.linkLabel}
                </Link>
                {fields.consent.after}
              </span>
            </label>
            <FieldError id={ids.error("consent")} message={consentError} />
          </div>

          {/* Honeypot: invisible to people and assistive tech, bots fill it. */}
          <div aria-hidden="true" className="absolute -left-[10000px] top-auto size-px overflow-hidden">
            <label htmlFor={ids.company}>company</label>
            <input
              id={ids.company}
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>

          <div aria-live="polite">
            {isNetworkError ? (
              <div className="flex items-start gap-3 rounded-card border-[1.5px] border-danger bg-card p-4 text-base font-bold text-danger">
                <CircleAlert aria-hidden="true" className="mt-0.5 size-6 shrink-0" />
                <p>{copyErrors.network}</p>
              </div>
            ) : null}
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              aria-busy={isPending || undefined}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-card bg-cta px-8 py-3 text-lg font-bold text-white hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-wait sm:w-auto"
            >
              {isPending ? (
                <>
                  <LoaderCircle
                    aria-hidden="true"
                    className="size-5 animate-spin motion-reduce:animate-none"
                  />
                  <span>{SUBMITTING_LABEL}</span>
                </>
              ) : (
                waitlist.submit
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
