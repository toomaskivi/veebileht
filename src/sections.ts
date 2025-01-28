export type Section = {
  id: string
  background: string
  mobileBackgroundOffset?: string
}

export const sections: Section[] = [
  {
    id: "savikrohv",
    background: '/savikrohv.jpg',
  },
  {
    id: "plaster",
    background: "/lubikrohv.jpg",
    mobileBackgroundOffset: 'calc(50% + -100px) center',
  },
  {
    id: "microcement",
    background: '/mikrowc.jpg',
  },
  {
    id: "marmorino",
    background: '/marmorino.jpg',
  },
  {
    id: "contact",
    background: '/contact.jpg',
    mobileBackgroundOffset: 'calc(50% + -300px) center'
  },
]

