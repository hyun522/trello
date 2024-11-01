import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-[10px] border-[1px]'>
      <div className='flex'>
        <Image
          src='/images/trello-logo.png'
          width={25}
          height={25}
          alt='로고이미지'
          className='mr-[3px]'
        />
        <p>Trello</p>
      </div>
      <div>
        <button className='border border-[1px] rounded-[6px] p-[5px] mr-[10px]'>
          Login
        </button>
        <button className='rounded-[6px] p-[5px] bg-black text-white'>
          Sign up
        </button>
      </div>
    </div>
  );
}
