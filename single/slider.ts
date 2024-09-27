import type {Component} from "vue";
import SlideMain from "~/components/Slides/SlideMain.vue";
import SlideAi from "~/components/Slides/SlideAi.vue";
import SlideAr from "~/components/Slides/SlideAr.vue";
import SlideCanvas from "~/components/Slides/SlideCanvas.vue";
import SlideColoring from "~/components/Slides/SlideColoring.vue";
import SlideLibrary from "~/components/Slides/SlideLibrary.vue";

export const currentSlide = ref(0)

export function prevSlide() {
    if (currentSlide.value == 0) {
        currentSlide.value = slides.length - 1
        return
    }

    currentSlide.value--
}

export function nextSlide() {
    if (currentSlide.value == slides.length - 1) {
        currentSlide.value = 0
        return
    }

    currentSlide.value++
}

export const slides: {
    classes: string;
    imageBg: string;
    imageBgMob: string;
    component: Component
}[] = [
    {
        classes: 'SlideMain',
        imageBg: '/images/main-bg.jpg',
        imageBgMob: '/images/main-bg-mob.jpg',
        component: SlideMain
    },
    {
        classes: 'SlideAi',
        imageBg: '/images/ai-bg.jpg',
        imageBgMob: '/images/ai-bg-mob.jpg',
        component: SlideAi
    },
    {
        classes: 'SlideAr',
        imageBg: '/images/ar-bg.jpg',
        imageBgMob: '/images/ar-bg-mob.jpg',
        component: SlideAr
    },
    {
        classes: 'SlideCanvas',
        imageBg: '/images/canvas-bg.jpg',
        imageBgMob: '/images/canvas-bg-mob.jpg',
        component: SlideCanvas
    },
    {
        classes: 'SlideColoring',
        imageBg: '/images/coloring-bg.jpg',
        imageBgMob: '/images/coloring-bg-mob.jpg',
        component: SlideColoring
    },
    {
        classes: 'SlideLibrary',
        imageBg: '/images/library-bg.jpg',
        imageBgMob: '/images/library-bg-mob.jpg',
        component: SlideLibrary
    },
]
