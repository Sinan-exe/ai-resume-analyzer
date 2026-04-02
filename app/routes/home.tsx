import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your dream Job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('app/public/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications and Resume Rating.</h1>
          <h2>Review your submission and check AI-powered feedback.</h2>
        </div>
      </section>
    </main>
  );
}
