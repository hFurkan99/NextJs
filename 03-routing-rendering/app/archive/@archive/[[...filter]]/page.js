import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const { filter } = params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  if (filter?.length > 2) {
    throw new Error(`Invalid filter: ${filter.join(", ")}`);
  }

  let news;
  let links = getAvailableNewsYears();
  let newsContent = <p>No news found for selected period.</p>;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error(`Invalid filter: ${filter.join(", ")}`);
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
  // const filteredNews = getNewsForYear(year);

  // return <NewsList news={filteredNews} />;
}
