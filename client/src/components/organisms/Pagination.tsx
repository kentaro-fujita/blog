import { useRouter } from "next/router";
import React, { FC } from "react";
import Button from "../atoms/Button";
import PaginationButton from "../molecules/PaginationButton";

export type PaginationProps = {
  countPages: number;
  currentPage: number;
};

const Pagination: FC<PaginationProps> = ({ countPages, currentPage }) => {
  const router = useRouter();
  const isPrevExist = currentPage !== 1;
  const isNextExist =
    currentPage !== countPages && currentPage + 1 <= countPages;
  if (countPages === 1) return <></>;

  return (
    <div className="flex justify-center gap-7">
      {isPrevExist && (
        <Button
          className="px-4 h-8 font-semibold rounded-lg shadow-md text-white bg-purple-700 hover:bg-purple-500"
          onClick={() => router.push(`/pages/${currentPage - 1}`)}
        >
          Prev
        </Button>
      )}
      <div className="flex justify-between gap-2 align-middle items-center">
        {isPrevExist && 1 < currentPage - 2 && (
          <>
            <PaginationButton filled={false} href="/pages/1">
              {1}
            </PaginationButton>
            <span>･･･</span>
          </>
        )}
        {Array.from(Array(countPages).keys()).map((n, i) => {
          if (currentPage === n + 1) {
            return (
              <PaginationButton filled={true} key={i}>
                {n + 1}
              </PaginationButton>
            );
          } else if (currentPage - 2 <= n + 1 && n + 1 <= currentPage + 2) {
            return (
              <PaginationButton filled={false} href={`/pages/${n + 1}`} key={i}>
                {n + 1}
              </PaginationButton>
            );
          }
        })}
        {isNextExist && currentPage + 2 < countPages && (
          <>
            <span>･･･</span>
            <PaginationButton filled={false} href={`/pages/${countPages}`}>
              {countPages}
            </PaginationButton>
          </>
        )}
      </div>
      {isNextExist && (
        <Button
          className="px-4 h-8 font-semibold rounded-lg shadow-md text-white bg-purple-700 hover:bg-purple-500"
          onClick={() => router.push(`/pages/${currentPage + 1}`)}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
