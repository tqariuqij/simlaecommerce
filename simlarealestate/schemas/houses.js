export default {
  name: 'houses',
  title: 'HousesForSale',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'area',
      title: 'Area',
      type: 'number',
    },
    {
      name: 'beds',
      title: 'Beds',
      type: 'number',
    },
    {
      name: 'baths',
      title: 'Baths',
      type: 'number',
    },
    {
      name: 'garage',
      title: 'Garage',
      type: 'number',
    },
  ],
};
