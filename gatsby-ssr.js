// exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
//   if (process.env.NODE_ENV !== "production") return;

//   let hc = getHeadComponents();
//   hc.forEach(el => {
//     if (el.type === "style") {
//       el.type = "link";
//       el.props["href"] = el.props["data-href"];
//       el.props["rel"] = "stylesheet";
//       el.props["type"] = "text/css";

//       delete el.props["data-href"];
//       delete el.props["dangerouslySetInnerHTML"];
//     }
//   });
// };
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.props && x.props["meta"]) {
      return -1
    } else if (y.props && y.props["meta"]) {
      return 1
    }
    return 0
  })

  replaceHeadComponents(headComponents);
}