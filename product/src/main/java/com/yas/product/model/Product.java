package com.yas.product.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.yas.product.model.attribute.ProductAttributeValue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product extends AbstractAuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String shortDescription;

    private String description;

    private String specification;

    private String sku;

    private String gtin;

    private String slug;

    private Double price;

    private Boolean isAllowedToOrder;

    private Boolean isPublished;

    private Boolean isFeatured;

    private Boolean isVisibleIndividually;

    private String metaTitle;

    private String metaKeyword;

    private String metaDescription;

    private Long thumbnailMediaId;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @OneToMany(mappedBy = "product", cascade = {CascadeType.PERSIST})
    private List<ProductCategory> productCategories = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<ProductAttributeValue> attributeValues = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = {CascadeType.PERSIST})
    private List<ProductImage> productImages = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Product parent;

    @OneToMany(mappedBy = "parent", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Product> products = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Product)) {
            return false;
        }
        return id != null && id.equals(((Product) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

}
