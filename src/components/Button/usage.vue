<script>
export const usage = () => {
  return [
    {
      dataObj: {
        attrs: {},
        props: {},
        on: {
          click: function(event) {
            console.log("clicked");
          }
        }
      },
      children: ["Click Me"]
    },
    {
      dataObj: {
        attrs: {},
        props: {},
        on: {
          click: function(event) {
            console.log("Login");
          }
        }
      },
      children: ["Login"]
    }
  ];
};
</script>
