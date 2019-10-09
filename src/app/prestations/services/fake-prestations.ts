import { Prestation } from 'src/app/shared/models/prestation';
export const fakePrestations: Prestation[] = [
  new Prestation({
    id: 'sdlkjf',
    typePresta: 'formation',
    client: 'Modis',
    nbJours: 10,
    comment: 'Merci modis'
  }),
  new Prestation({
    id: 'ldskjgfl',
    typePresta: 'prestation',
    client: 'Capgemini',
    nbJours: 20,
    tjmHt: 600,
    comment: 'Merci capgemini'
  })
];
