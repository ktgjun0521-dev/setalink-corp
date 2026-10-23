"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/Section";
import FadeIn from "@/components/FadeIn";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

const topics = [
  "施策の効果が分からない・どこを改善すべきか決めたい",
  "数字が合わない・見たい数字がすぐ見られない",
  "AIで業務の手間を減らしたい",
  "業務の流れを整えたい・自動化したい",
  "まだ整理できていないが、まず話を聞いてほしい",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました");
      }

      setSending(false);
      setSubmitted(true);
    } catch (err) {
      setSending(false);
      setError(err instanceof Error ? err.message : "送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            <div className="mx-auto flex h-20 w-20 items-center justify-center bg-emerald-100" style={{ animation: "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}>
              <svg
                className="h-10 w-10 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                style={{ opacity: 0, animation: "fadeIn 0.4s 0.3s ease forwards" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                  style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: "checkmark-draw 0.6s 0.5s ease forwards" }}
                />
              </svg>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
              送信完了
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray">
              お問い合わせありがとうございます。
              <br />
              内容を確認のうえ、2営業日以内にご連絡いたします。
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        label="Contact"
        title="無料相談・お問い合わせ"
        lead="初回相談（60分・オンライン）は無料です。「何から相談すればいいか分からない」という段階でも大丈夫です。2営業日以内にご連絡します。"
      />

      {/* Form Section */}
      <section className="py-14 md:py-20">
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
                    className="mt-2 block w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
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
                    className="mt-2 block w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
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
                    className="mt-2 block w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
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
                    className="mt-2 block w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    placeholder="03-1234-5678"
                  />
                </div>

                {/* Topic */}
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-foreground"
                  >
                    ご相談のテーマ
                    <span className="ml-2 text-xs text-gray">（任意）</span>
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="mt-2 block w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-foreground transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                  >
                    <option value="">選択してください</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
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
                    className="mt-2 block w-full resize-none border-2 border-ink bg-paper px-4 py-3 text-sm text-foreground placeholder:text-gray/50 transition-colors focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                    placeholder="いま取り組んでいることや、困っていることをお書きください（箇条書きで大丈夫です）"
                  />
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex h-14 w-full items-center justify-center gap-2 border-2 border-ink bg-accent-blue px-10 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-ink disabled:opacity-60 sm:w-auto"
                >
                  {sending ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                      </svg>
                      送信中...
                    </>
                  ) : "無料相談を申し込む"}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
