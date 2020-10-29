import React from "react";
import { Pagination } from "react-bootstrap";

interface ComponentProps {
  activePage: number;
  noOfPages: number;
  setActivePage: (activePage: number) => void;
}

export default function (props: ComponentProps) {
  const { noOfPages, activePage, setActivePage } = props;
  // Create array from 0 to noOfPages - 1
  const arr = [...Array(noOfPages).keys()];
  return (
    <Pagination size="sm">
        <Pagination.Prev />
      {arr.map((index) => (
        <Pagination.Item
          key={`page_${index}`}
          active={index === activePage}
          onClick={() => setActivePage(index)}
        >
          {index}
        </Pagination.Item>
      ))}
        <Pagination.Ellipsis />
        <Pagination.Next />
    </Pagination>
  );
}
