import Image from 'next/image';

export default function Header() {
  return (
    <div className='md:flex justify-between items-center p-[10px] border-[1px] '>
      <div className='hidden md:flex'>
        <Image
          src='/images/trello-logo.png'
          width={25}
          height={25}
          alt='로고이미지'
          className='md:mr-[3px]'
        />
        <p>Trello</p>
      </div>
      <div className='flex justify-between'>
        <button className='md:border border-[1px] rounded-[6px] p-[5px] mr-[10px]'>
          Login
        </button>
        <button className='md: rounded-[6px] p-[5px] bg-black text-white'>
          Sign up
        </button>
      </div>
    </div>
  );
}
