export const useDefaults = () => {
    const transition = 'transition ease-in-out duration-400'
    const trendsDefault = [
      {
        localTrend: "Peru",
        title: "SpaceX",
        count: "18.8k",
      },{
        localTrend: "Peru",
        title: "Dominguez",
        count: "18.3k",
      },{
        localTrend: "Peru",
        title: "#colectivos",
        count: "2.8k",
      }]

    const followDefault = [
      {
        name: "Joe Biden",
        handle: "@JoseBiden",
        image: "https://www.picsum.photos/200/200"
      },{
        name: "Nirmal Manoj",
        handle: "@nirmalmanoj_c",
        image: "https://www.picsum.photos/200/200"
      },{
        name: "Deser Alexis",
        handle: "@DeserAlexis",
        image: "https://www.picsum.photos/200/200"
      }]
    return {
        transition,
        trendsDefault,
        followDefault
    }
}