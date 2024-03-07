import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div>
      <div className="Heading text-3xl w-full  mt-4 flex justify-center  ">
        Testimonials
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col p-4 m-8 rounded-3xl bg-zinc-800 h-fit min-h-[150px] gap-2">
            <p>
              <span className="text-sm">
                Hareshvar shines in class, excels academically, and leads
                cultural activities effectively. His volunteering spirit and
                organizational skills make him a perfect fit for the Students'
                Council presidency. He's dedicated to representing his peers and
                has my full endorsement for this vital role. I have every
                confidence in his ability to serve with integrity and make a
                positive impact on our campus community.{" "}
              </span>
            </p>
            <div className="text-right">
              <div className="font-bold italic text-xl">Dr. P Parthiban </div>
              <div className="italic mb-2">HEAD OF DEPARTMENT</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col p-4 m-8 rounded-3xl bg-zinc-800 h-fit min-h-[150px] gap-2">
            <p>
              <span className="text-sm">
                Working closely during NITTFEST, I witnessed his dedication,
                work ethic, and clear vision. He possesses a remarkable ability
                to inspire change through his spirited approach and visionary
                outlook. With concrete objectives and a passion for progress, He
                is an ideal leader to propel our community forward. He brings
                not only ideas but also the determination to enact tangible
                results.
              </span>
            </p>
            <div className="text-right">
              <div className="font-bold italic text-xl">Mukesh Sundar</div>
              <div className="italic mb-2">
                General Secretary Students' Council'23
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col p-4 m-8 rounded-3xl bg-zinc-800 h-fit min-h-[150px] gap-2">
            <p>
              <span className="text-sm">
                After witnessing Hareshvar's steadfast dedication over 2 years
                at 180DC, I'm in awe of his unwavering commitment and impressive
                communication growth, making him a compelling for choice student
                body administration. Best wishes in the elections!
              </span>
            </p>
            <div className="text-right">
              <div className="font-bold italic text-xl">Deepigaa</div>
              <div className="italic mb-2">
                General Secretary Students' Council'23
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col p-4 m-8 rounded-3xl bg-zinc-800 h-fit min-h-[150px]">
            <p>
              <span className="text-sm">
                Hareshvar has outperformed in executing various tasks and played
                an instrumental role in the success of NITTFEST. He has an
                indomitable commitment to the roles he has taken up. His
                resilience and interpersonal skills make him a challenging
                contender for the post of student council president. I am
                confident about his capabilities and wish him the best of luck!
              </span>
            </p>
            <div className="text-right">
              <div className="font-bold italic text-xl">Vishal Raj </div>
              <div className="italic mb-2">Chairperson Pragyan'23</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col p-4 m-8 rounded-3xl bg-zinc-800 h-fit min-h-[150px]">
            <p>
              <span className="text-sm">
                Having known Hareshvar since his freshman year, I can attest to
                his commitment to doing what's right even in the face of
                opposition. His knack for problem-solving and the dedication he
                puts into the work he takes up speaks more about his worthiness
                as a candidate for president. I believe his capabilities and
                will power will bring the change the campus is longing for.
              </span>
            </p>
            <div className="text-right">
              <div className="font-bold italic text-xl">Raghuram</div>
              <div className="italic mb-2">
                Overall-Coordinator, Festember'23
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col p-4 m-8 rounded-3xl bg-zinc-800 h-fit min-h-[150px]">
            <p>
              <span className="text-sm">
                Hareshvar had been a strong pillar for the FMT'22 edition. It
                was a crucial year for the team to be back after covid and he
                led many aspects in bringing the team to glory. Be it foodstalls
                or managing companies he was always a dependable person with a
                great sense of responsibility.
              </span>
            </p>
            <div className="text-right">
              <div className="font-bold italic text-xl">Sabarni Paul</div>
              <div className="italic mb-2">Head, FMT</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col p-4 m-8 rounded-3xl bg-zinc-800 h-fit min-h-[150px]">
            <p>
              <span className="text-sm">
                During his time at the Festember Marketing Team, Hareshvar was
                an integral part of the fest and contributed to the successful
                execution of various tasks, his dedication and effective problem
                solving skills makes him finish any task to a perfect level and
                makes him an ideal Students Council President candidate, wishing
                him the best of luck.
              </span>
            </p>
            <div className="text-right">
              <div className="font-bold italic text-xl">Vijai Mahesh</div>
              <div className="italic mb-2">Chairperson, Pragyan</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
