const Category = (name, img) => `
			<div class="category" id="${name}">
				<img src="${img}" alt="${name}" />
				<p>${name}</p>
			</div>
`;
export default Category;
