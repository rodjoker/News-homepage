

const Article = ({img, number, title, paragraph}) => {
  return (
    <article className='flex h-[162px] text-[15px] w-[340px] mx-3'>
     <div className='w-[100px] flex-none'>
        <img src={img} alt="imgArticle" />
     </div>
     <div className='pl-6'>
        <p className='text-GrayishBlue text-3xl mb-[16px] font-bold'>{number}</p>
        <h2 className='mb-[16px] font-bold hover:text-SoftOrange cursor-pointer'>{title}</h2>
        <p className='text-DarkGrayishBlue '>{paragraph}</p>
     </div> 
    </article>
  )
}
export default  Article

