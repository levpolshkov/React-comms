export const sortByDate = (
  collection: any[],
  order?: "ascending" | "descending"
) => {
  if (order === "descending") {
    return collection.sort(
      (a: any, b: any) => b.createdAt.toDate() - a.createdAt.toDate()
    );
  }

  return collection.sort(
    (a: any, b: any) => a.createdAt.toDate() - b.createdAt.toDate()
  );
};

export const sortMentionsToTop = (collection: any[], userId: string) => {
  return collection.sort((a: any, b: any) =>
    a.mentions.includes(userId) ? -1 : 1
  );
};