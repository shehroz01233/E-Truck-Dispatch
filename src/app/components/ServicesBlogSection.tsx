// "use client";

// import Image from "next/image";
// import Link from "next/link";
// export type BlogItem = {
//   image: string;
//   title: string;
//   description: string;
// };
// type ServicesBlogSectionProps = {
//   heading: string;
//   introduction: string;
//   blogs: BlogItem[];
// };
// export default function ServicesBlogSection({
//   heading,
//   introduction,
//   blogs
// }: ServicesBlogSectionProps) {
//   return <>
    
//       <section className="bg-[#1f1f1f] px-4 py-10 text-white min-[30rem]:px-6 sm:px-8 lg:px-12 lg:py-16">
//         <div className="mx-auto max-w-[97.5rem]">
//           <div className="bg-[#b94f08] px-4 pb-[5.75rem] pt-8 min-[23.4375rem]:px-6 sm:px-8 md:px-10 lg:px-[4.375rem] lg:pb-[8rem] lg:pt-[3.375rem]">
          
//             <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start lg:gap-16">
//               <div>
//                 <h2 className="font-['Outfit'] text-[1.875rem] font-bold leading-none text-white min-[23.4375rem]:text-4xl sm:text-5xl">
                
//                   {heading}
//                 </h2>

//                 <div className="inline-flex">
                
//                   <Link href="#" className="mt-5 inline-flex min-h-9 items-center justify-center bg-[#161616] px-4 py-1 font-['Outfit'] text-sm font-medium text-white   hover:bg-[#202020] sm:mt-6">
                  
//                     View All Blogs
//                   </Link>
//                 </div>
//               </div>

//               <p className="max-w-[32.5rem] border-l-2 border-[#161616] pl-4 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white min-[23.4375rem]:pl-5 md:ml-auto">
              
//                 {introduction}
//               </p>
//             </div>
//           </div>

//           <div className="relative z-10 -mt-[4.375rem] grid gap-3 px-4 min-[23.4375rem]:px-6 sm:px-8 md:grid-cols-2 md:px-10 lg:-mt-[5.75rem] lg:px-[4.375rem] xl:grid-cols-4">
//             {blogs.map(blog => <BlogCard key={blog.image} blog={blog} />)}
//           </div>
//       </div>
//     </section>
//     </>;
// }
// function BlogCard({
//   blog
// }: {
//   blog: BlogItem;
// }) {
//   return <article className="group relative overflow-hidden bg-[#161616]">
      
//       <div className="relative aspect-[340/200] overflow-hidden">
        
//         <div className="absolute inset-0">
//           <Image src={blog.image} alt={blog.title} fill sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 21.25rem" className="object-cover    group-hover:scale-[1.07]" />
          
//         </div>
//         <span className="pointer-events-none absolute inset-y-0 left-[-45%] w-[35%] skew-x-[-18deg] bg-white/10 opacity-0    group-hover:left-[115%] group-hover:opacity-100" />
//       </div>

//       <div className="px-5 pb-6 pt-4">
        
//         <h3 className="font-['Outfit'] text-[1.25rem] font-semibold leading-[1.2] text-white   group-hover:text-white">
//           {blog.title}
//         </h3>

//         <p className="mt-3 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white/80   group-hover:text-white/90">
//           {blog.description}
//         </p>

//         <Link href="#" className="mt-5 inline-block border-b-2 border-[#b94f08] pb-1 font-['DM_Sans'] text-sm font-medium text-[#b94f08]    group-hover:translate-x-1">
          
//           Read Full Article
//         </Link>
//       </div>
//     </article>;
// }
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

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

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -70px 0px",
} as const;

export default function ServicesBlogSection({
  heading,
  introduction,
  blogs,
}: ServicesBlogSectionProps) {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="bg-[#1f1f1f] px-4 py-10 text-white min-[30rem]:px-6 sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[97.5rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="bg-[#b94f08] px-4 pb-[5.75rem] pt-8 min-[23.4375rem]:px-6 sm:px-8 md:px-10 lg:px-[4.375rem] lg:pb-[8rem] lg:pt-[3.375rem]"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start lg:gap-16">
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease,
                }}
                className="font-['Outfit'] text-[1.875rem] font-bold leading-none text-white min-[23.4375rem]:text-4xl sm:text-5xl"
              >
                {heading}
              </motion.h2>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease,
                }}
                className="inline-flex"
              >
                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.025,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.2,
                    ease,
                  }}
                >
                  <Link
                    href="#"
                    className="mt-5 inline-flex min-h-9 items-center justify-center bg-[#161616] px-4 py-1 font-['Outfit'] text-sm font-medium text-white hover:bg-[#202020] sm:mt-6"
                  >
                    View All Blogs
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease,
              }}
              className="max-w-[32.5rem] border-l-2 border-[#161616] pl-4 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white min-[23.4375rem]:pl-5 md:ml-auto"
            >
              {introduction}
            </motion.p>
          </div>
        </motion.div>

        <div className="relative z-10 -mt-[4.375rem] grid gap-3 px-4 min-[23.4375rem]:px-6 sm:px-8 md:grid-cols-2 md:px-10 lg:-mt-[5.75rem] lg:px-[4.375rem] xl:grid-cols-4">
          {blogs.map((blog, index) => (
            <BlogCard
              key={`${blog.title}-${index}`}
              blog={blog}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

type BlogCardProps = {
  blog: BlogItem;
  index: number;
};

function BlogCard({
  blog,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease,
      }}
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 45px rgba(0,0,0,0.25)",
      }}
      className="group relative overflow-hidden bg-[#161616]"
    >
      <div className="relative aspect-[340/200] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{
            scale: 1.07,
          }}
          transition={{
            duration: 0.6,
            ease,
          }}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 21.25rem"
            className="object-cover"
          />
        </motion.div>

        <span className="pointer-events-none absolute inset-y-0 left-[-45%] w-[35%] skew-x-[-18deg] bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
      </div>

      <div className="px-5 pb-6 pt-4">
        <motion.h3
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.45,
            delay: 0.1 + index * 0.08,
            ease,
          }}
          className="font-['Outfit'] text-[1.25rem] font-semibold leading-[1.2] text-white group-hover:text-white"
        >
          {blog.title}
        </motion.h3>

        <motion.p
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.45,
            delay: 0.16 + index * 0.08,
            ease,
          }}
          className="mt-3 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white/80 group-hover:text-white/90"
        >
          {blog.description}
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.45,
            delay: 0.22 + index * 0.08,
            ease,
          }}
          whileHover={{
            x: 4,
          }}
          className="mt-5 w-fit"
        >
          <Link
            href="#"
            className="inline-block border-b-2 border-[#b94f08] pb-1 font-['DM_Sans'] text-sm font-medium text-[#b94f08]"
          >
            Read Full Article
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}