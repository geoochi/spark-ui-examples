import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import animatedBeam from '@/components/animatedBeam/Demo.vue'
import animatedGradientText from '@/components/animatedGradientText/Demo.vue'
import animatedList from '@/components/animatedList/Demo.vue'
import animatedShinyText from '@/components/animatedShinyText/Demo.vue'
import avatarCircle from '@/components/avatarCircle/Demo.vue'
import bento from '@/components/bento/Demo.vue'
import blurFade from '@/components/blurFade/Demo.vue'
import blurIn from '@/components/blurIn/Demo.vue'
import dotPattern from '@/components/dotPattern/Demo.vue'
import globe from '@/components/globe/Demo.vue'
import gradualSpacing from '@/components/gradualSpacing/Demo.vue'
import letterUp from '@/components/letterUp/Demo.vue'
import marquee from '@/components/marquee/Demo.vue'
import marquee3D from '@/components/marquee/3DDemo.vue'
import marqueeVertical from '@/components/marquee/VerticalDemo.vue'
import meteors from '@/components/meteors/Demo.vue'
import orbitingCircles from '@/components/orbitingCircles/Demo.vue'
import particles from '@/components/particles/Demo.vue'
import retroGrid from '@/components/retroGrid/Demo.vue'
import ripple from '@/components/ripple/Demo.vue'
import skewedInfiniteScroll from '@/components/skewedInfiniteScroll/Demo.vue'
import typingAnimation from '@/components/typingAnimation/Demo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/animatedBeam', name: 'animatedBeam', component: animatedBeam },
  {
    path: '/animatedGradientText',
    name: 'animatedGradientText',
    component: animatedGradientText,
  },
  { path: '/animatedList', name: 'animatedList', component: animatedList },
  {
    path: '/animatedShinyText',
    name: 'animatedShinyText',
    component: animatedShinyText,
  },
  { path: '/avatarCircle', name: 'avatarCircle', component: avatarCircle },
  { path: '/bento', name: 'bento', component: bento },
  { path: '/blurFade', name: 'blurFade', component: blurFade },
  { path: '/blurIn', name: 'blurIn', component: blurIn },
  { path: '/dotPattern', name: 'dotPattern', component: dotPattern },
  { path: '/globe', name: 'globe', component: globe },
  {
    path: '/gradualSpacing',
    name: 'gradualSpacing',
    component: gradualSpacing,
  },
  { path: '/letterUp', name: 'letterUp', component: letterUp },
  { path: '/marquee', name: 'marquee', component: marquee },
  { path: '/marquee3D', name: 'marquee3D', component: marquee3D },
  {
    path: '/marqueeVertical',
    name: 'marqueeVertical',
    component: marqueeVertical,
  },
  {
    path: '/meteors',
    name: 'meteors',
    component: meteors,
  },
  {
    path: '/orbitingCircles',
    name: 'orbitingCircles',
    component: orbitingCircles,
  },
  {
    path: '/particles',
    name: 'particles',
    component: particles,
  },
  {
    path: '/retroGrid',
    name: 'retroGrid',
    component: retroGrid,
  },
  {
    path: '/ripple',
    name: 'ripple',
    component: ripple,
  },
  {
    path: '/skewedInfiniteScroll',
    name: 'skewedInfiniteScroll',
    component: skewedInfiniteScroll,
  },
  {
    path: '/typingAnimation',
    name: 'typingAnimation',
    component: typingAnimation,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
