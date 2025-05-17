import { BriefcaseIcon } from '@heroicons/react/24/outline';

export default function JobSeekLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <BriefcaseIcon className="h-6 w-6 rotate-[15deg] mx-2 md:h-12 md:w-12" />
      <p className="text-[24px] md:text-[32px]">Job Seek Indonesia</p>
    </div>
  );
}

// This component is used in the layout.tsx file
// import JobSeekLogo from './components/job-seek-logo';
