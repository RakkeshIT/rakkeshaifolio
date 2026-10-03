"use client";

import React from "react";

type RewardButtonProps = {
    text: string;
    onClick?: () => void;
};

const Button = ({ text, onClick }: RewardButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
        group
        w-[120px]
        h-[40px]
        bg-[#101218]
        flex
        items-center
        justify-center
        border-0
        rounded-[8px]
        cursor-pointer
        transition-all
        duration-300
        hover:bg-[#202531]
      "
        >
            <span
                className="
          relative
          w-[40px]
          h-[40px]
          flex
          flex-col
          items-center
          justify-center
        "
            >
                {/* Box Top */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 60 20"
                    className="
            absolute
            w-[40%]
            z-[3]
            transition-all
            duration-300
            group-hover:-translate-y-[5px]
          "
                >
                    <path
                        strokeLinecap="round"
                        strokeWidth="4"
                        stroke="#6A8EF6"
                        d="M2 18L58 18"
                    />

                    <circle
                        strokeWidth="5"
                        stroke="#6A8EF6"
                        fill="#101218"
                        r="7"
                        cy="9.5"
                        cx="20.5"
                    />

                    <circle
                        strokeWidth="5"
                        stroke="#6A8EF6"
                        fill="#101218"
                        r="7"
                        cy="9.5"
                        cx="38.5"
                    />
                </svg>

                {/* Box Body */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 58 44"
                    className="absolute w-[40%] z-[2]"
                >
                    <mask id="reward-box-mask" fill="white">
                        <rect rx="3" height="44" width="58" />
                    </mask>

                    <rect
                        mask="url(#reward-box-mask)"
                        strokeWidth="8"
                        stroke="#6A8EF6"
                        fill="#101218"
                        rx="3"
                        height="44"
                        width="58"
                    />

                    <line
                        strokeWidth="6"
                        stroke="#6A8EF6"
                        y2="29"
                        x2="58"
                        y1="29"
                        x1="0"
                    />

                    <path
                        strokeLinecap="round"
                        strokeWidth="5"
                        stroke="#6A8EF6"
                        d="M45.0005 20L36 3"
                    />

                    <path
                        strokeLinecap="round"
                        strokeWidth="5"
                        stroke="#6A8EF6"
                        d="M21 3L13.0002 19.9992"
                    />
                </svg>

                {/* Coin */}
                <span
                    className="
            absolute
            z-[1]
            w-[25%]
            h-[25%]
            bg-[#e4d61a]
            rounded-full
            border-2
            border-[#ffe956]
            mt-[4px]
            transition-all
            duration-300
            group-hover:-translate-y-[5px]
            group-hover:delay-200
          "
                />
            </span>

            {/* Dynamic Text */}
            <span
                className="
          w-[70px]
          h-full
          text-[13px]
          text-[#6A8EF6]
          flex
          items-center
          justify-start
          font-semibold
        "
            >
                {text}
            </span>
        </button>
    );
};

export default Button;