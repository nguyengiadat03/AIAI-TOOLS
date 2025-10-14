import React from 'react';
const logos = [
  'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg',
];
export function LogoCarousel() {
  const duplicatedLogos = [...logos, ...logos];
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {duplicatedLogos.map((logo, index) => (
          <li key={index}>
            <img src={logo} alt={`Client logo ${index + 1}`} className="h-10 w-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
}
