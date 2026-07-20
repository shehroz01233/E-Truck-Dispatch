"use client";

import Image from "next/image";
import Link from "next/link";
export type BlogItem = {
  image: string;
  title: string;
  description: string;
};
type ServicesBlogSectionProps = {
  heading: string;
  introduction: string;
  blogs: BlogItem[];
};
export default function ServicesBlogSection({
  heading,
  introduction,
  blogs
}: ServicesBlogSectionProps) {
  return <>
    
      <section className="bg-[#1f1f1f] px-4 py-10 text-white min-[30rem]:px-6 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[97.5rem]">
          <div className="bg-[#b94f08] px-4 pb-[5.75rem] pt-8 min-[23.4375rem]:px-6 sm:px-8 md:px-10 lg:px-[4.375rem] lg:pb-[8rem] lg:pt-[3.375rem]">
          
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start lg:gap-16">
              <div>
                <h2 className="font-['Outfit'] text-[1.875rem] font-bold leading-none text-white min-[23.4375rem]:text-4xl sm:text-5xl">
                
                  {heading}
                </h2>

                <div className="inline-flex">
                
                  <Link href="#" className="mt-5 inline-flex min-h-9 items-center justify-center bg-[#161616] px-4 py-1 font-['Outfit'] text-sm font-medium text-white   hover:bg-[#202020] sm:mt-6">
                  
                    View All Blogs
                  </Link>
                </div>
              </div>

              <p className="max-w-[32.5rem] border-l-2 border-[#161616] pl-4 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white min-[23.4375rem]:pl-5 md:ml-auto">
              
                {introduction}
              </p>
            </div>
          </div>

          <div className="relative z-10 -mt-[4.375rem] grid gap-3 px-4 min-[23.4375rem]:px-6 sm:px-8 md:grid-cols-2 md:px-10 lg:-mt-[5.75rem] lg:px-[4.375rem] xl:grid-cols-4">
            {blogs.map(blog => <BlogCard key={blog.image} blog={blog} />)}
          </div>
      </div>
    </section>
    </>;
}
function BlogCard({
  blog
}: {
  blog: BlogItem;
}) {
  return <article className="group relative overflow-hidden bg-[#161616]">
      
      <div className="relative aspect-[340/200] overflow-hidden">
        
        <div className="absolute inset-0">
          <Image src={blog.image} alt={blog.title} fill sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 21.25rem" className="object-cover    group-hover:scale-[1.07]" />
          
        </div>
        <span className="pointer-events-none absolute inset-y-0 left-[-45%] w-[35%] skew-x-[-18deg] bg-white/10 opacity-0    group-hover:left-[115%] group-hover:opacity-100" />
      </div>

      <div className="px-5 pb-6 pt-4">
        
        <h3 className="font-['Outfit'] text-[1.25rem] font-semibold leading-[1.2] text-white   group-hover:text-white">
          {blog.title}
        </h3>

        <p className="mt-3 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white/80   group-hover:text-white/90">
          {blog.description}
        </p>

        <Link href="#" className="mt-5 inline-block border-b-2 border-[#b94f08] pb-1 font-['DM_Sans'] text-sm font-medium text-[#b94f08]    group-hover:translate-x-1">
          
          Read Full Article
        </Link>
      </div>
    </article>;
}
