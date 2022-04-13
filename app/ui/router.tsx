import { Link as RemixLink, useMatches, useNavigate } from "remix";

export type LinkProps = React.PropsWithChildren<{
  to: string;
  toIndex?: boolean;
  className?: string;
  activeClassName?: string;
  iconSvg?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}> &
  React.AriaAttributes;

export function Link({
  children,
  to,
  toIndex,
  className,
  activeClassName,
  iconSvg,
  onClick,
  ...rest
}: LinkProps): JSX.Element {
  if (!to && !toIndex) {
    throw new Error("Link requires either to or toIndex props.");
  }

  const matches = useMatches();
  let composedClassName = className ? className : "";

  if (activeClassName && matches.some((m) => m.pathname === to)) {
    composedClassName += " " + activeClassName;
  }

  return (
    <RemixLink {...rest} className={composedClassName} to={to}>
      {iconSvg && <img src={iconSvg.type} />}
      {children}
    </RemixLink>
  );
}

export function useRouter() {
  const navigate = useNavigate();
  return { navigate };
}
