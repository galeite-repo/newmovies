import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

//declaração de tipos das propriedades do component Pagination
interface IPropsComponent {
  handleChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
  page: number;
  total_pages: number;
}
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#7AC7E3"
    }
  }
}));

//Component pagination
export default function PaginationComponent({
  handleChange,
  page,
  total_pages,
}: IPropsComponent) {
  const classes = useStyles();
  return (
    <div>
      <Pagination
        classes={{ ul: classes.ul }}
        count={total_pages}
        page={page}
        variant="outlined" 
        size="large"
        // color="primary"
        onChange={handleChange}
      />
    </div>
  );
}