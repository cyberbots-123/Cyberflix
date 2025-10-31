import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  CssBaseline,
  Grid
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemButton } from "@mui/material"; // Import this

const drawerWidth = 240;

const AdminPanel = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState("Dashboard");
  const [applications, setApplications] = useState([]);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const [orders, setOrders] = useState([]);


  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    specs: "",
    category: "",
    image: null,
  });


  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    startDate: "",
    description: "",
    openings: 0,
  });

  const handleInputChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleProductInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };


  // Handle image file input
  const handleProductImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleCreate = () => {
    axios
      .post("http://localhost:5000/api/jobopenings/create", newJob)
      .then(() => {
        alert("Job created successfully");
        setNewJob({
          title: "",
          location: "",
          startDate: "",
          description: "",
          openings: 0,
        });
      })
      .catch((error) => console.log("Error creating job:", error));
  };

  const handleProductUpdate = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      alert("Please fill name, price, and category.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("specs", newProduct.specs);
    formData.append("category", newProduct.category);

    if (newProduct.image) {
      formData.append("image", newProduct.image);
    }

    axios
      .put(`http://localhost:5000/api/products/edit/${editingProductId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Product updated successfully");
        setNewProduct({ name: "", price: "", specs: "", category: "", image: null });
        setEditMode(false);
        setEditingProductId(null);
        fetchProducts();
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  const handleProductCreate = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.image) {
      alert("Please fill name, price, category, and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("specs", newProduct.specs);
    formData.append("category", newProduct.category);
    formData.append("image", newProduct.image);

    axios
      .post("http://localhost:5000/api/products/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Product added successfully");
        setNewProduct({ name: "", price: "", specs: "", category: "", image: null });
        fetchProducts();
      })
      .catch((error) => console.error("Error creating product:", error));
  };

  const handleProductDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/delete/${id}`)
      .then(() => {
        alert("Product deleted successfully");
        fetchProducts();
      })
      .catch((err) => console.error("Delete error:", err));
  };

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error fetching products:", err));
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
  if (currentView === "Applications") {
    axios
      .get("http://localhost:5000/api/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.log("Error fetching applications:", err));
  } else if (currentView === "Products") {
    fetchProducts();
  } else if (currentView === "Orders") {
    axios
      .get("http://localhost:5000/api/orders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.log("Error fetching orders:", err));
  }
}, [currentView]);


  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Admin Panel
      </Typography>
      <List>
        {["Dashboard", "Jobs", "Applications", "Products","Orders"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setCurrentView(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="fixed" sx={{ top: '90px', backgroundColor: 'primary.main', boxShadow: 3 }}>


        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        <Toolbar />

        {/* Dashboard View */}
        {currentView === "Dashboard" && (
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Welcome to the Admin Dashboard
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                gap: 3,
                my: 3,
              }}
            >
              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                <Typography variant="h6" color="text.secondary">
                  Total Job Openings
                </Typography>
                <Typography variant="h4" color="primary">
                  10
                </Typography>
              </Card>

              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                <Typography variant="h6" color="text.secondary">
                  Applications Received
                </Typography>
                <Typography variant="h4" color="secondary">
                  {applications.length}
                </Typography>
              </Card>

              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                <Typography variant="h6" color="text.secondary">
                  Interviews Scheduled
                </Typography>
                <Typography variant="h4" color="success.main">
                  3
                </Typography>
              </Card>
            </Box>

            <Card sx={{ p: 3, boxShadow: 3 }}>
              <Typography variant="h6" gutterBottom>
                Recent Applications
              </Typography>
              {applications.slice(0, 5).map((app, index) => (
                <Box
                  key={index}
                  sx={{
                    borderBottom: "1px solid #eee",
                    py: 1,
                  }}
                >
                  <Typography variant="subtitle1">{app.fullName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Applied for {app.position} on{" "}
                    {new Date(app.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              ))}
            </Card>
          </Container>
        )}

        {/* Job Creation View */}
        {currentView === "Jobs" && (
          <Container maxWidth="md">
            <Card sx={{ boxShadow: 3, padding: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Create Job Opening
                </Typography>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >


                  <TextField
                    label="Title"
                    name="title"
                    value={newJob.title}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Location"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Start Date"
                    name="startDate"
                    value={newJob.startDate}
                    onChange={handleInputChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                  <TextField
                    label="Description"
                    name="description"
                    value={newJob.description}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <TextField
                    label="Openings"
                    name="openings"
                    value={newJob.openings}
                    onChange={handleInputChange}
                    type="number"
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreate}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Create Job
                  </Button>
                </Box>


              </CardContent>
            </Card>
          </Container>
        )}

        {/* Applications View */}
        {currentView === "Applications" && (
          <Container maxWidth="md">
            <Card sx={{ boxShadow: 3, padding: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Submitted Applications
                </Typography>
                {applications.map((app, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 3,
                      p: 2,
                      border: "1px solid #ccc",
                      borderRadius: 2,
                      backgroundColor: "#fafafa",
                    }}
                  >
                    <Typography variant="h6">{app.fullName}</Typography>
                    <Typography variant="body2">
                      Position: {app.position}
                    </Typography>

                    
                    {app.description && (
  <Box sx={{ mt: 1 }}>
    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
      Raw Description:
    </Typography>
    <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'gray' }}>
      {JSON.stringify(app.description)}
    </Typography>

    <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
      Split Version:
    </Typography>
    <ul style={{ marginTop: 4, paddingLeft: 18 }}>
      {app.description
        .split(";!")
        .map((point) => point.trim())
        .filter((point) => point.length > 0)
        .map((point, i) => (
          <li key={i}>
            <Typography variant="body2">{point}</Typography>
          </li>
        ))}
    </ul>
  </Box>
)}


                    <Typography variant="body2">
                      Submitted on: {new Date(app.createdAt).toLocaleString()}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                        href={`http://localhost:5000/${app.resumePath}`}
                        target="_blank"
                      >
                        Download Resume
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        href={`http://localhost:5000/${app.photoPath}`}
                        target="_blank"
                      >
                        Download Photo
                      </Button>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Container>
        )}

        {currentView === "Products" && (
          <Container maxWidth="md">
            <Card sx={{ boxShadow: 3, p: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Manage Products
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleProductInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleProductInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Specifications"
                    name="specs"
                    value={newProduct.specs}
                    onChange={handleProductInputChange}
                    fullWidth
                  />

                  <Button variant="outlined" component="label">
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleProductImageChange}
                    />
                  </Button>

                  {newProduct.image && (
                    <Box sx={{ mt: 1 }}>
                      <img
                        src={URL.createObjectURL(newProduct.image)}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: 200 }}
                      />
                    </Box>
                  )}

                  {/* ✅ Added Category Field */}
                  <TextField
                    label="Category"
                    name="category"
                    value={newProduct.category}
                    onChange={handleProductInputChange}
                    fullWidth
                  />
                  {editMode ? (
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleProductUpdate}
                      >
                        Update Product
                      </Button>
                      <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() => {
                          setEditMode(false);
                          setEditingProductId(null);
                          setNewProduct({ name: "", price: "", specs: "", category: "", image: null });
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleProductCreate}
                      sx={{ alignSelf: "flex-start" }}
                    >
                      Add Product
                    </Button>
                  )}
                </Box>

                  <Typography variant="h6" sx={{ mt: 4 }}>
  Product List by Category
</Typography>

{Object.entries(
  products.reduce((acc, product) => {
    const category = product.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {})
).map(([category, items]) => (
  <Box key={category} sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
      {category}
    </Typography>
    <Grid container spacing={2}>
      {items.map((product) => (
        <Grid item xs={12} sm={6} key={product._id}>
          <Card sx={{ p: 2 }}>
            {product.imageUrl && (
              <Box sx={{ mb: 1 }}>
                <img
                  src={`http://localhost:5000${product.imageUrl}`}
                  alt={product.name}
                  style={{ width: "100%", maxHeight: 150, objectFit: "contain" }}
                />
              </Box>
            )}
            <Typography variant="subtitle1">{product.name}</Typography>
            <Typography variant="body2">₹{product.price}</Typography>
            <Typography variant="body2">{product.specs}</Typography>
            <Typography variant="body2">Category: {product.category}</Typography>
            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 1 }}
              onClick={() => handleProductDelete(product._id)}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 1, ml: 1 }}
              onClick={() => {
                setEditMode(true);
                setEditingProductId(product._id);
                setNewProduct({
                  name: product.name,
                  price: product.price,
                  specs: product.specs,
                  category: product.category,
                  image: null,
                });
              }}
            >
              Edit
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
))}
              </CardContent>
            </Card>
          </Container>
        )}

{currentView === "Orders" && (
  <Container maxWidth="lg">
    <Typography variant="h5" gutterBottom>Customer Orders</Typography>
    {orders.length === 0 ? (
      <Typography>No orders placed yet.</Typography>
    ) : (
      orders.map((order) => (
        <Card key={order._id} sx={{ mb: 2, p: 2 }}>
          <Typography variant="subtitle1">
            <strong>Order ID:</strong> {order._id}
          </Typography>
          <Typography variant="body2">
            <strong>Customer:</strong> {order.shippingDetails?.fullName} ({order.shippingDetails?.email})
          </Typography>
          <Typography variant="body2">
            <strong>Mobile:</strong> {order.shippingDetails?.mobile}
          </Typography>

          {/* 👇 Added full address block */}
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography variant="body2">
              <strong>Address:</strong> {order.shippingDetails?.address}
            </Typography>
            {order.shippingDetails?.landmark && (
              <Typography variant="body2">
                <strong>Landmark:</strong> {order.shippingDetails?.landmark}
              </Typography>
            )}
          </Box>

          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Products:</strong>
          </Typography>
          <ul>
            {order.products.map((item, idx) => (
              <li key={idx}>
                {item.productId?.name || 'Unknown'} - ₹{item.productId?.price} × {item.quantity}
              </li>
            ))}
          </ul>

          <Typography variant="body2">
            <strong>Total:</strong> ₹{order.totalAmount}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Placed on: {new Date(order.createdAt).toLocaleString()}
          </Typography>
        </Card>
      ))
    )}
  </Container>
)}

      </Box>
    </Box>
  );
};

export default AdminPanel;
