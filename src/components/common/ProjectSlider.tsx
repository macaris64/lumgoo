'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { observer } from 'mobx-react-lite';
import { useProjectStore } from '@/stores';
import ProjectCard from './ProjectCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlider = observer(() => {
  const projectStore = useProjectStore();

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="project-slider"
      >
        {projectStore.featuredProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .project-slider .swiper-pagination-bullet {
          background-color: #0ea5e9;
          opacity: 0.5;
        }
        
        .project-slider .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .project-slider .swiper-button-next,
        .project-slider .swiper-button-prev {
          color: #0ea5e9;
        }
        
        .project-slider .swiper-button-next:after,
        .project-slider .swiper-button-prev:after {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
});

ProjectSlider.displayName = 'ProjectSlider';

export default ProjectSlider; 