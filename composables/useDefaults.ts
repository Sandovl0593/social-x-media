export const useDefaults = () => {
    const transition = 'transition ease-in-out duration-400'
    const trendsDefault = [{
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
    return {
        transition,
        trendsDefault
    }
}