import Article from "./Article"
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

export default function ArticlesContainer() {
  return (
    <section className="mt-7 lg:flex md:flex-wrap">
      <Article
        img={img1}
        number='01'
        title='Reviving Retro PCs'
        paragraph='What happens when old PCs are given modern upgrades?'
      />
      <Article
        img={img2}
        number=' 02'
        title='Top 10 Laptops of 2022'
        paragraph='Our best picks for various needs and budgets.'
      />
      <Article
        img={img3}
        number=' 03'
        title='The Growth of Gaming'
        paragraph='How the pandemic has sparked fresh opportunities.'
      />
    </section>
  )
}
