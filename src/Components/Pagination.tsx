import React from "react";
import { Pagination } from "react-bootstrap";

interface ComponentProps {
  activePage: number;
  Pages: number;
  setActivePage: (activePage: number) => void;
}

export default function (props: ComponentProps) {
  const { Pages, activePage, setActivePage } = props;
  // Create array from 0 to Pages - 1
  const arr = [...Array(Pages).keys()];
  return (
    <Pagination size="sm">
      {arr.map((index) => (
        <Pagination.Item
          key={`page_${index+1}`}
          active={index === activePage}
          onClick={() => setActivePage(index)}
        >
          {index}
        </Pagination.Item>
      ))}
    
    </Pagination>
  );
}
