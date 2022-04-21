const language: "cn" | "en" = "cn";

type LangdData = {
  cn: {
    [key: string]: string | ((...argv: string[]) => string);
  };
  en: {
    [key: string]: string | ((...argv: string[]) => string);
  };
};

const langData: LangdData = {
  cn: {
    vaildVersion(name: string, nodeVersion: string): string {
      return `您当前的Node版本为${process.version}, 但是 ${name} 需要Node版本${nodeVersion}, 请升级您本机的node版本`;
    },
  },
  en: {
    vaildVersion(name: string, nodeVersion: string): string {
      return `Your current node version is ${process.version}, but ${name} requires node version ${nodeVersion}. Please upgrade your local Node`;
    },
  },
};

export default langData[language];
