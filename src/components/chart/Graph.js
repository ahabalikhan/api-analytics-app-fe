import { ForceGraph2D } from 'react-force-graph';

function Graph({ graphData }) {


  return (
    <div>
      {/* <div className='title'><h1>Graph</h1></div> */}
      <ForceGraph2D
        style={{ border: "1px solid black" }}
        graphData={graphData}
        nodeLabel="id"
        nodeAutoColorBy="group"
        linkDirectionalParticles="value"
        linkDirectionalParticleSpeed={d => d.value * 0.001}
        height={600}
        width={1200}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 6;/// globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'blue';// node.color;
          ctx.fillText(label, node.x, node.y);

          node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
        }}
      />
    </div>
  );
}

export default Graph;
