import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '68d433h7',
  dataset: 'production',
  apiVersion: '2022-11-22',
  useCdn: true,
  token:
    'skTj7bBAkbxs3LGjDcS2KosxHJXLFti1YguoZF2wCizYXoayGHofJe6UmSqUWSukq3dlRXQVEUN1IcbKBFx7SVZCFXUwf0uUIE11aw5xpfMY2sI2bVjpguqSNrux7ZFfmFhd5mMolbulOapiEbak615wcgvUMGhNRax89tEUxryoookfPn7f',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
