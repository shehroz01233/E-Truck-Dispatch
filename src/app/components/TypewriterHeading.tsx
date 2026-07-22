"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterHeadingProps = {
  fixedText?: string;
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  dotsSpeed?: number;
  holdTime?: number;
  nextTextDelay?: number;
  startDelay?: number;
};

export default function TypewriterHeading({
  fixedText = "",
  texts,
  typingSpeed = 40,
  deletingSpeed = 22,
  dotsSpeed = 250,
  holdTime = 1300,
  nextTextDelay = 200,
  startDelay = 600,
}: TypewriterHeadingProps) {
  const normalizedTexts = useMemo(
    () => texts.map((text) => text.trim()).filter(Boolean),
    [texts],
  );

  const normalizedFixedText = fixedText.trim();

  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [dotCount, setDotCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(startDelay === 0);

  /*
  |--------------------------------------------------------------------------
  | Initial delay
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    if (startDelay === 0) {
      setHasStarted(true);
      return;
    }

    const timeout = window.setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => window.clearTimeout(timeout);
  }, [startDelay]);

  /*
  |--------------------------------------------------------------------------
  | Typing, dots and deleting controller
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    if (!hasStarted || normalizedTexts.length === 0) {
      return;
    }

    const currentText = normalizedTexts[activeTextIndex] ?? "";
    let timeout: number;

    /*
    | Type the current sentence
    */
    if (!isDeleting && characterCount < currentText.length) {
      timeout = window.setTimeout(() => {
        setCharacterCount((currentCount) => currentCount + 1);
      }, typingSpeed);
    }

    /*
    | Sentence complete hone ke baad dots one by one show karo
    */
    else if (
      !isDeleting &&
      characterCount === currentText.length &&
      dotCount < 3
    ) {
      timeout = window.setTimeout(() => {
        setDotCount((currentCount) => currentCount + 1);
      }, dotsSpeed);
    }

    /*
    | Three dots complete hone ke baad sentence ko hold karo
    */
    else if (
      !isDeleting &&
      characterCount === currentText.length &&
      dotCount === 3
    ) {
      timeout = window.setTimeout(() => {
        setDotCount(0);
        setIsDeleting(true);
      }, holdTime);
    }

    /*
    | Sirf dynamic sentence erase karo
    */
    else if (isDeleting && characterCount > 0) {
      timeout = window.setTimeout(() => {
        setCharacterCount((currentCount) =>
          Math.max(0, currentCount - 1),
        );
      }, deletingSpeed);
    }

    /*
    | Next sentence par move karo
    */
    else {
      timeout = window.setTimeout(() => {
        setActiveTextIndex(
          (currentIndex) =>
            (currentIndex + 1) % normalizedTexts.length,
        );

        setCharacterCount(0);
        setDotCount(0);
        setIsDeleting(false);
      }, nextTextDelay);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [
    activeTextIndex,
    characterCount,
    deletingSpeed,
    dotCount,
    dotsSpeed,
    hasStarted,
    holdTime,
    isDeleting,
    nextTextDelay,
    normalizedTexts,
    typingSpeed,
  ]);

  if (normalizedTexts.length === 0) {
    return normalizedFixedText || null;
  }

  const currentText = normalizedTexts[activeTextIndex] ?? "";
  const visibleText = currentText.slice(0, characterCount);

  /*
  | Longest heading reserve karta hai taake content jump na kare
  */
  const longestDynamicText = normalizedTexts.reduce(
    (longest, text) =>
      text.length > longest.length ? text : longest,
    "",
  );

  const fixedTextWithSpace = normalizedFixedText
    ? `${normalizedFixedText} `
    : "";

  const longestFullText = `${fixedTextWithSpace}${longestDynamicText}...`;

  return (
    <span className="grid">
      {/* SEO and screen-reader text */}
      <span className="sr-only">
        {fixedTextWithSpace}
        {normalizedTexts[0]}
      </span>

      {/* Invisible text prevents layout shifting */}
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1"
      >
        {longestFullText}
      </span>

      {/* Visible typewriter heading */}
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1"
      >
        {/* Ye part fixed rahega */}
        <span>{fixedTextWithSpace}</span>

        {/* Ye part type aur erase hoga */}
        <span>{visibleText}</span>

        {/* Sentence complete hone ke baad dots one by one */}
        {dotCount > 0 && (
          <span>{Array.from({ length: dotCount }, () => ".").join("")}</span>
        )}
      </span>
    </span>
  );
}