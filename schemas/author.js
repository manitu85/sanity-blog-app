export default {
  name: "author",
  type: "document",
  title: "Author",
  icon: () => "👨‍💻",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
