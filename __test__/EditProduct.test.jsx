    import EditProduct from "../src/components/EditProduct";
    
  
    it("test_form_inputs_update_state_correctly", () => {
        const wrapper = shallow(<EditProduct />);
        const titleInput = wrapper.find('[name="title"]');
        const descriptionInput = wrapper.find('[name="description"]');
        const conditionInput = wrapper.find('[name="material"]');
        const locationInput = wrapper.find('[name="pattern"]');
        const categoryInput = wrapper.find('[name="category"]');
        const imgInput = wrapper.find('[name="genre"]');

        titleInput.simulate('change', { target: { value: 'New Title' } });
        expect(wrapper.state('title')).toEqual('New Title');

        descriptionInput.simulate('change', { target: { value: 'New Description' } });
        expect(wrapper.state('description')).toEqual('New Description');

        conditionInput.simulate('change', { target: { value: 'New Condition' } });
        expect(wrapper.state('condition')).toEqual('New Condition');

        locationInput.simulate('change', { target: { value: 'New Location' } });
        expect(wrapper.state('location')).toEqual('New Location');

        categoryInput.simulate('change', { target: { value: 'New Category' } });
        expect(wrapper.state('category')).toEqual('New Category');

        imgInput.simulate('change', { target: { files: [new File([''], 'test.png', { type: 'image/png' })] } });
        expect(wrapper.state('img')).toEqual('data:image/png;base64,');
    });