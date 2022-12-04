import { PProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from 'classnames';

export const Tag = ({ size = "s", children, href, color = 'ghost', className, ...props }: PProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.s]: size == "s",
            [styles.m]: size == "m",
            [styles.ghost]: color == "ghost",
            [styles.red]: color == "red",
            [styles.primary]: color == "primary",
            [styles.green]: color == "green",
            [styles.grey]: color == "grey",
        })}
            {...props}
        >{
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div >
    );
};