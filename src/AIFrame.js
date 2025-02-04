import React from "react";

const AIFrame = () => {
  const iframeStyles = {
    width: "100%",
    height: "100%",
    border: "none",
  };

  const containerStyles = {
    margin: "0",
    padding: "0",
    height: "100vh", // Full viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
  };

  return (
    <div style={containerStyles}>
      <iframe
        src="https://app.relevanceai.com/agents/d7b62b/13a5bcdd7e89-45ff-a4fe-6468387a484a/2e14764d-d431-41c8-80af-23338e8de0d1/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true" width="100%" height="100%" frameborder="0"
        style={iframeStyles}
        title="AI Agent"
      ></iframe>
    </div>
  );
};

export default AIFrame;


