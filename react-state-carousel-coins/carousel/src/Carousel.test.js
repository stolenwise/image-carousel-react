import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


// Smoke test
it("renders without crashing", () => {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
});

// Snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  expect(asFragment()).toMatchSnapshot(); // toMatchSnapshot comes from jest-dom
});

//Left arrow test
it("goes to the 3 of 3 when left arrow is clicked", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />);
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);
    expect(container.querySelector("img[alt='testing image 3']")).toBeInTheDocument();
    expect(container.querySelector("img[alt='testing image 2']")).not.toBeInTheDocument()
    expect(container.querySelector("img[alt='testing image 1']")).not.toBeInTheDocument();
  });

//Right arrow test
it("goes to the 2 of 3 when right arrow is clicked", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />);
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
    expect(container.querySelector("img[alt='testing image 2']")).toBeInTheDocument();
    expect(container.querySelector("img[alt='testing image 1']")).not.toBeInTheDocument();
    expect(container.querySelector("img[alt='testing image 3']")).not.toBeInTheDocument();
  });

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
