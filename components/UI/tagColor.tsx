export const tagColor: TagColor = {
  nextjs: { bgColor: "#0A7B83E2", hover: "#09686dE2" },
  javascript: { bgColor: "#ffba08", hover: "#faa307" },
  html: { bgColor: "#f06529", hover: "#e34c26" },
  css: { bgColor: "#FE4A49E2", hover: "#ed3434E2" },
  markdown: { bgColor: "#168aad", hover: "#1a759f" },
};

export type TagColor = {
  [key: string]: {
    bgColor: string;
    hover: string;
  };
};
