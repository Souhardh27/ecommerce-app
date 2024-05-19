<MainData />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <><Route path="/admin/orders" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={1}>
              <OrderTable />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="/admin/order/:id" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={1}>
              <UpdateOrder />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="/admin/products" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={2}>
              <ProductTable />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="/admin/new_product" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={3}>
              <NewProduct />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="/admin/product/:id" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={2}>
              <UpdateProduct />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="/admin/users" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={4}>
              <UserTable />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="/admin/user/:id" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={4}>
              <UpdateUser />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="/admin/reviews" element={<ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={5}>
              <ReviewsTable />
            </Dashboard>
          </ProtectedRoute>}></Route><Route path="*" element={<NotFound />}></Route></>

      </Routes>
      <Footer />
    </>
  );
}

export default App;