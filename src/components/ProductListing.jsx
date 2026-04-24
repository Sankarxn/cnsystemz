import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import cctv from '../assets/products/CCtv.jpg';
import RTx from '../assets/products/RTX 4090.jpg';
import Ryzen from '../assets/products/Ryzen.jpg';
import speaker from '../assets/products/Speaker.jpg';

const products = [
  { id: 1, name: "Ryzen 9 7950X", price: "$549", img: Ryzen },
  { id: 2, name: "RTX 4090 24GB", price: "$1,599", img: RTx },
  { id: 3, name: "CCTV Camera", price: "$129", img: cctv },
  { id: 4, name: "Speaker", price: "$169", img: speaker },
];

export default function ProductListing() {
  return (
    <section id="products" className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 text-gradient">Featured Products</h2>
          <p className="text-secondary">Curated selection of high-performance hardware.</p>
        </div>
        <Row className="g-4">
          {products.map((product, i) => (
            <Col key={product.id} sm={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card text-center"
              >
                <div 
                    className="mb-4 rounded-4 overflow-hidden h-200 bg-dark-gray" 
                >
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-100 h-100 object-fit-cover img-luminosity"
                  />
                </div>
                <h5 className="text-white mb-2">{product.name}</h5>
                <p className="text-accent mb-3 text-accent-weight">{product.price}</p>
                <button className="btn w-100 border-0 rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 product-card-btn">
                  <ShoppingCart size={16} />
                  <span>Details</span>
                </button>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
