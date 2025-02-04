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
        src="https://app.relevanceai.com/agents/bcbe5a/f97a18512bb1-4923-8366-d6b939e66fb5/4b756661-bb35-44a1-9bd6-12df6f6aedbf/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false"
        style={iframeStyles}
        title="AI Agent"
      ></iframe>
    </div>
  );
};

export default AIFrame;


