interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default function Category(props: CategoryProps) {
  console.log(props);
  const { categories } = props.params;
  console.log(categories);

  return <h3>Categoria dinamica {categories}</h3>;
}
