// Site configuration
export interface SiteConfig {
  name: string;
  titleSeparator: string;
}

export const siteConfig: SiteConfig = {
  name: "NOT GOV.UK",
  titleSeparator: " | ",
};

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: `${import.meta.env.BASE_URL}/`,
  },
  {
    label: "About",
    href: `${import.meta.env.BASE_URL}/about`,
  },
  {
    label: "Quick Start",
    href: `${import.meta.env.BASE_URL}/quickstart`,
  },
  {
    label: "Components",
    href: "https://github.com/leowilkin/govuk-personal/blob/main/docs/components.md",
  },
];

export function getNavigationWithActive(currentPath: string): NavigationItem[] {
  console.log("Current path:", currentPath);
  navigation.forEach((item) => {
    console.log(`Checking item: ${item.label} with href: ${item.href}`);
    console.log("currentPath === item.href", currentPath === item.href);
    console.log(
      "item.href !== `${import.meta.env.BASE_URL}/`",
      item.href !== `${import.meta.env.BASE_URL}/`
    );
    console.log(
      "currentPath.startsWith(item.href)",
      currentPath.startsWith(item.href)
    );

    if (item.href === `${import.meta.env.BASE_URL}/`) {
      console.log("Skipping root path check for item:", item.label);
    } else if (currentPath.startsWith(item.href)) {
      console.log("Item is active:", item.label);
    } else {
      console.log("Item is not active:", item.label);
    }
    console.log("");
  });

  return navigation.map((item) => ({
    ...item,
    active:
      currentPath === item.href ||
      (item.href !== `${import.meta.env.BASE_URL}/` &&
        currentPath.startsWith(item.href)),
  }));
}

// FOOTER CONFIG
export interface FooterLink {
  label: string;
  href: string;
}

export const footerLinks: FooterLink[] = [
  {
    label: "Help",
    href: "https://github.com/leowilkin/govuk-personal/issues",
  },
  {
    label: "Contact",
    href: `${import.meta.env.BASE_URL}/contact`,
  },
  {
    label: "GitHub Repo",
    href: "https://github.com/leowilkin/govuk-personal",
  },
];

// LOGO (in header) CONFIG
export interface LogoConfig {
  text: string;
  href: string;
  customImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export const logoConfig: LogoConfig = {
  text: siteConfig.name,
  href: `${import.meta.env.BASE_URL}/`,
  // Uncomment and configure to use a custom image instead of text
  // customImage: {
  //   src: "/assets/images/logo.png",
  //   alt: "not GOV.UK Logo",
  //   width: 120,
  //   height: 30
  // }
};
