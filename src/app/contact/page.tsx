"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "@/components/FadeIn";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate send (no backend yet)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSending(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <section className="flex min-h-[70vh] items-center pt-20">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center lg:px-8">
          <FadeIn>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-lime/30">
              <svg
                className="h-8 w-8 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
              送信完了
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray">
              お問い合わせありがとうございます。
              <br />
              内容を確認のうえ、担当者よりご連絡いたします。
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
              Contact
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              お問い合わせ
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray">
              データ活用・AI導入・業務改善に関するご相談を承っております。
              お気軽にお問い合わせください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 md:pb-28 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-2xl"
            >
              <div className="grid gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    お名前
                    <span className="ml-1 text-accent-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground"
                  >
                    会社名
                    <span className="ml-1 text-accent-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    placeholder="株式会社〇〇"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    メールアドレス
                    <span className="ml-1 text-accent-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    placeholder="info@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground"
                  >
                    電話番号
                    <span className="ml-2 text-xs text-gray">（任意）</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    placeholder="03-1234-5678"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    お問い合わせ内容
                    <span className="ml-1 text-accent-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    placeholder="ご相談内容をお書きください"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
                >
                  {sending ? "送信中..." : "送信する"}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
