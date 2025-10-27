import { RefObject } from "react";

type Callback = (target: Element) => void;
type Options = IntersectionObserverInit;

const createObserver = (
  callback: Callback,
  options: Options = {}
): IntersectionObserver => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, options);

  return observer;
};

export const useIntersectionObserver = () => {
  const observeElement = (
    ref: RefObject<HTMLElement>,
    className: string,
    options: Options = {}
  ): (() => void) => {
    const observer = createObserver((target) => {
      target.classList.add(className);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  };

  return { observeElement };
};
