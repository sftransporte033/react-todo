export const todoFilters = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export const filtersButtons = {
  [todoFilters.ALL]: {
    literal: "Todos",
    href: `/?filters=${todoFilters.ALL}`,
  },
  [todoFilters.ACTIVE]: {
    literal: "Activos",
    href: `/?filters=${todoFilters.ACTIVE}`,
  },
  [todoFilters.COMPLETED]: {
    literal: "Completados",
    href: `/?filters=${todoFilters.COMPLETED}`,
  },
};
