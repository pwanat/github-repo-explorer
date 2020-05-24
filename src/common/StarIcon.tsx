import * as React from 'react';

function StarIcon(props) {
  return (
    <svg
      className="prefix__octicon prefix__octicon-star prefix__mr-1"
      viewBox="0 0 14 16"
      width={14}
      height={16}
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
      />
    </svg>
  );
}

export default StarIcon;
